package xyz.timoney.swsad;

import xyz.timoney.swsad.controller.Controller;
import xyz.timoney.swsad.controller.QuestionnaireController;
import xyz.timoney.swsad.controller.UserController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SwsadApplication {

    public static void main(String[] args) {
        Object[] objects = new Object[]{
                Controller.class,
                UserController.class,
                QuestionnaireController.class};

        SpringApplication.run(objects, args);
    }

}