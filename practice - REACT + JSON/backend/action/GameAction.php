<?php
    require_once("action/CommonAction.php");
    require_once("action/DAO/JsonDAO.php");

    class GameAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $result = [];

            
            return compact("result");
        }
    }