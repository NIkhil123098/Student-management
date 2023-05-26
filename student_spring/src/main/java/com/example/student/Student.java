package com.example.student;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import studentlist.student;


@Repository
public interface Student extends MongoRepository<student,Integer> {
}
