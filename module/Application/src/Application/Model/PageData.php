<?php

namespace Application\Model;

use Zend\Db\TableGateway\TableGateway;

class PageData
{

    protected $tableGateway;
    protected $config;
    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

    public function fetchAll()
    {
        $resultSet = $this->tableGateway->select();
        return $resultSet;
    }

    public function getContentById($id)
    {
        $rowset = $this->tableGateway->select(array('id' => $id));
        $row = $rowset->current();
        if (!$row) {
            return false;
            //throw new \Exception("Could not find row $id");
        }
        return $row;
    }


    public function saveContent($id,$text)
    {
        if(empty($id) || empty($text)) return false;

        $data = array(
            'id' => $id,
            'text'  => $text
        );
       $this->tableGateway->insert($data);
       return true;
    }

    public function updateContent($id,$text)
    {
       if(empty($id) || empty($text)) return false;

        $data = array(
            'id' => $id,
            'text'  => strip_tags($text, '<p><a><u><h1><h2><h3><h4><blockquote><i><b>')
        );
        $this->tableGateway->update($data, array('id' => $id));
        return true;
        //Send meg gjerne en epost, finn meg på Google Plus, Facebook, Twitter eller Github! Jeg gleder meg til å høre fra deg!
    }

}