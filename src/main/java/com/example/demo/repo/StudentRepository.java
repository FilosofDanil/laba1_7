package com.example.demo.repo;

import com.example.demo.models.Student;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.Table;

@Table(name = "hibernate_sequence")
public interface StudentRepository extends CrudRepository<Student,Long> {

}
