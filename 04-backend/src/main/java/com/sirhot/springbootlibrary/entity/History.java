package com.sirhot.springbootlibrary.entity;

import lombok.Data;

import javax.persistence.*;

@Table(name = "History")
@Entity
@Data
public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "checkout_date")
    private String chekoutDate;

    @Column(name = "returned_date")
    private String returnedDate;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "description")
    private String description;

    @Column(name = "img")
    private String img;

    public History() {
    }

    public History(String userEmail,
                   String chekoutDate,
                   String returnedDate,
                   String title,
                   String author,
                   String description,
                   String img) {
        this.userEmail = userEmail;
        this.chekoutDate = chekoutDate;
        this.returnedDate = returnedDate;
        this.title = title;
        this.author = author;
        this.description = description;
        this.img = img;
    }
}
