<?php
        if (isset($_POST['confirmation']) && !empty($_POST['confirmation'])) {

            try {
               $conn = new PDO('mysql:host=localhost;dbname=student_MaAleksV20','MaAleksV20','srCieTna');

                $sql = 'UPDATE `statement` SET `confirmation` = :confirmation';

                $stmt = $conn->prepare($sql);

                $stmt->bindValue(':confirmation', $_POST['confirmation']);

                $stmt->execute();

                $conn = NULL;

                header('Location: admin_statement.php');

        } catch(PDOException $e) {
            print "ERROR :>".$e->getMessage().'<br>';
            die();
        }
    }
?>