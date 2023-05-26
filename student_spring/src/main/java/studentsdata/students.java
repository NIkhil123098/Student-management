package studentsdata;

import com.example.student.Student;
import com.example.student.grades;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import studentlist.student;
import studentlist.studentgrades;

import java.util.List;

@RestController
public class students {

    @Autowired private Student mongo1;
    @Autowired private grades mongo2;


    //ArrayList<student> s=new ArrayList<>();
    @CrossOrigin("http://localhost:4200")
    @PostMapping(value="/addstudent")
    public student addstudent(@RequestBody student student)
    {
        float attendance=((float) (student.getPresent()) /(student.getPresent()+student.getAbsent()))*100;
        System.out.println(attendance);
        student.setAttendance(attendance);
        mongo1.save(student);


        return student;

    }

    @GetMapping(value="deletestudent/{id}")
    public String deletestudent(@PathVariable int id)
    {

        mongo1.deleteById(id);

        return "Student deleted successfully";

    }

    @PostMapping(value="updatestudent/{id}")
    public student updatestudent(@PathVariable int id,@RequestBody student student)
    {
        student student1=mongo1.findById(id).get();



        student1.setLoc(student.getLoc());
        student1.setName(student.getName());
        student1.setId(id);
        student1.setDegree(student.getDegree());
        student1.setPresent(student.getPresent());
        float attendance=((float) (student.getPresent()) /(student.getPresent()+student.getAbsent()))*100;

        student1.setAttendance(attendance);
        student1.setCourse(student.getCourse());
        mongo1.save(student1);




        return student;

    }

@CrossOrigin("http://localhost:4200")
    @RequestMapping(value="/studentslist")
    public List<student> student()
    {

        return mongo1.findAll();

    }



    @CrossOrigin("http://localhost:4200")
    @GetMapping(value="/studentslist/{id}")
    public student studentid(@PathVariable Integer id)
    {

        return mongo1.findById(id).get();

    }

    @CrossOrigin("http://localhost:4200")
    @GetMapping(value="/studentgrades/{id}")
    private studentgrades grade(@PathVariable Integer id)
    {
        return mongo2.findById(id).get();
    }

    @GetMapping(value="/addgrades")
    private studentgrades grade(@RequestBody studentgrades grades)
    {

        mongo2.save(grades);
        return grades;
    }
}
