package studentlist;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection="studentgrades")
@AllArgsConstructor
@NoArgsConstructor
public class studentgrades {
    private float sem1,sem2,sem3,sem4,sem5,sem6,sem7,sem8;
    @Id private int id;

    public float getSem1() {
        return sem1;
    }

    public void setSem1(float sem1) {
        this.sem1 = sem1;
    }

    public float getSem2() {
        return sem2;
    }

    public void setSem2(float sem2) {
        this.sem2 = sem2;
    }

    public float getSem3() {
        return sem3;
    }

    public void setSem3(float sem3) {
        this.sem3 = sem3;
    }

    public float getSem4() {
        return sem4;
    }

    public void setSem4(float sem4) {
        this.sem4 = sem4;
    }

    public float getSem5() {
        return sem5;
    }

    public void setSem5(float sem5) {
        this.sem5 = sem5;
    }

    public float getSem6() {
        return sem6;
    }

    public void setSem6(float sem6) {
        this.sem6 = sem6;
    }

    public float getSem7() {
        return sem7;
    }

    public void setSem7(float sem7) {
        this.sem7 = sem7;
    }

    public float getSem8() {
        return sem8;
    }

    public void setSem8(float sem8) {
        this.sem8 = sem8;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
