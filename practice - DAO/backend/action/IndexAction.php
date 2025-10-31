<?php
    require_once("action/CommonAction.php");
    require_once("action/DAO/DbDAO.php");

    class IndexAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $result = [];
            if (isset ($_POST["titre"])){
                DbDAO::addNote($_POST["text"],$_POST["titre"], $_POST["date"]);
            }
			
            return compact("result");
        }
    }