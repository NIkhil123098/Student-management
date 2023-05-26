package com.example.student;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import studentlist.studentgrades;

@Repository
public interface grades extends MongoRepository<studentgrades,Integer> {

}
