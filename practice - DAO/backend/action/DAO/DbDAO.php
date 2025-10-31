<?php
    require_once ("action/DAO/Connection.php");
    class DbDAO {
        public static function addNote($text, $titre, $date){

            $conection = Connection::getConnection();
            //Statement prepara la syntaxe d code a la bd

            $statement = $conection->prepare("INSERT INTO memo (id, subject, description, date) values (DEFAULT, ?, ?, ?)");
            // va buscar el primer ? que esta en la requete
            $statement ->bindParam(1, $titre);
            $statement ->bindParam(2, $text);
            $statement ->bindParam(3, $date);
            $statement->execute();

        } 
    }