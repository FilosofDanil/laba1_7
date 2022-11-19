package com.example.demo.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {
    @GetMapping("/")
    public String main(Model model) {
        model.addAttribute("title", "MainPage");
        return "index";
    }
    @GetMapping("/login")
    public String login(Model model) {
        return "Login";
    }
    @GetMapping("/Marks")
    public String marks(Model model) {
        return "Marks";
    }
    @GetMapping("/Faq")
    public String faq(Model model) {
        return "FAQ";
    }
    @GetMapping("/Sign")
    public String Sign(Model model) {
        return "Sign";
    }
    @GetMapping("/Contact_us")
    public String contacts(Model model) {
        return "Contact_us";
    }
    @GetMapping("/News")
    public String news(Model model) {
        return "News";
    }
    @GetMapping("/Cabinet")
    public String cabinet(Model model) {
        return "Cabinet";
    }
    @GetMapping("/JS")
    public String js(Model model) {
        return "JSCodePage";
    }
}
