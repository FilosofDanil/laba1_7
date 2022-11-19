package com.example.demo.Controllers;

import com.example.demo.models.Student;
import com.example.demo.repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Date;
import java.util.Iterator;
import java.util.Objects;

@Controller
public class DataController {
    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/log")
    public RedirectView find(@RequestParam String login,
                             @RequestParam String password,
                             Model model) {
        Iterable<Student> students = studentRepository.findAll();
        for (Student student : students) {
            if (Objects.equals(student.getEmail(), login) && Objects.equals(student.getPassword(), password)) {
                return new RedirectView("Cabinet");
            }
        }
        return new RedirectView("");
    }

    @PostMapping("/Sign")
    public String sign(      @RequestParam String login,
                             @RequestParam String password,
                             @RequestParam String name,
                             @RequestParam String surname,
                             @RequestParam String date_of_birth,
                             @RequestParam String group,
                             Model model) {
        Student student = new Student(date_of_birth, login, group, name, password, surname);
        studentRepository.save(student);
        return "redirect:/Sign";
    }
}
