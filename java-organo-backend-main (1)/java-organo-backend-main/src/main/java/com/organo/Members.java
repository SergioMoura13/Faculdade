package com.organo;

/**
 * Members
 */
public class Members {
	private String name;
	private String role;
	private String image;

	public Members(String name,String role, String image) {
		super();
		this.image = image;
		this.name = name;
		this.role = role;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getImg() {
		return image;
	}
	public void setImg(String image) {
		this.image = image;
	}

	
}
