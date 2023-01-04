package com.organo;


import org.bson.Document;
import org.bson.conversions.Bson;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.FindOneAndUpdateOptions;
import com.mongodb.client.model.ReturnDocument;
import com.mongodb.client.model.Updates;

/**
 * Database
 */
public class Database {

	static private String uri = "mongodb+srv://sergio:1234@organo.g6f6gib.mongodb.net/?retryWrites=true&w=majority";

	public static Document getUsers() {
		try (MongoClient mongoClient = MongoClients.create(Database.uri)) {
			MongoDatabase database = mongoClient.getDatabase("Organo");
			MongoCollection<Document> collection = database.getCollection("Teams");
			Document doc = collection.find().first();
			return doc;
		}
	}

	public static void saveUser(Members member, String teamName) {
		try (MongoClient mongoClient = MongoClients.create(Database.uri)) {
			MongoDatabase database = mongoClient.getDatabase("Organo");
			MongoCollection<Document> collection = database.getCollection("Teams");
			Bson filter = Filters.eq("teamsList.teamName", teamName);
			FindIterable<Document> teamsListIte = collection.find(filter);
			MongoCursor<Document> teamsList = teamsListIte.iterator();
			if (teamsList.hasNext()) {
				insertOnTeamMembers(collection, teamName, member);
			} else {
				insertOnTeamList(collection, teamName, member);
			}

		}

		return;
	}

	public static void delUser(Members member, String teamName) {
		try (MongoClient mongoClient = MongoClients.create(Database.uri)) {
			MongoDatabase database = mongoClient.getDatabase("Organo");
			MongoCollection<Document> collection = database.getCollection("Teams");
			delMember(collection, teamName, member);
		}

	}

	private static void delMember(MongoCollection<Document> collection, String teamName, Members member) {
		String memberJson = convertJson(member);
		Document memberDoc= Document.parse(memberJson);
		Bson filter = Filters.eq("teamsList.members.name", member.getName());
		Bson update = Updates.pull("teamsList.$.members", memberDoc);
		collection.findOneAndUpdate(filter, update);
	}

	private static void insertOnTeamList(MongoCollection<Document> collection, String teamName, Members member) {
		String memberJson = convertJson(member);
		Document newTeam = Document.parse("{\"teamName\":\"" + teamName + "\", \"members\":[" + memberJson + "]}");
		Bson update = Updates.push("teamsList", newTeam);
		FindOneAndUpdateOptions options = new FindOneAndUpdateOptions().returnDocument(ReturnDocument.AFTER);
		Bson filter = Filters.empty();
		Object result = collection.findOneAndUpdate(filter, update, options);
		System.out.println(result);
	}

	private static void insertOnTeamMembers(MongoCollection<Document> collection, String teamName, Members member) {
		String memberJson = convertJson(member);
		Document newMember = Document.parse(memberJson);
		Bson filter = Filters.eq("teamsList.teamName", teamName);
		Bson update = Updates.push("teamsList.$.members", newMember);
		collection.findOneAndUpdate(filter, update);
	}

	private static String convertJson(Members member) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			return mapper.writeValueAsString(member);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return "";
	}
}
