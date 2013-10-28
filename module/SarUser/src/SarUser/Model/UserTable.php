<?php

namespace SarUser\Model;

use Zend\Db\TableGateway\TableGateway;

class UserTable
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

    public function getUserById($id)
    {
        $id  = (int) $id;
        $rowset = $this->tableGateway->select(array('ID' => $id));
        $row = $rowset->current();
        if (!$row) {
            return false;
            //throw new \Exception("Could not find row $id");
        }
        return $row;
    }

    public function getUserByUsername($username)
    {
        $username  = (string) $username;
        $rowset = $this->tableGateway->select(array('Login' => $username));
        $row = $rowset->current();
        if (!$row) {
            return false;
            //throw new \Exception("Could not find row $username");
        }
        return $row;
    }


    public function saveUser(Login $login, $hashed_password)
    {
        $data = array(
            'Login' => $login->username,
            'Password'  => $hashed_password,
        );

        $id = (int)$login->id;
        if ($id == 0) {
            $this->tableGateway->insert($data);
        } else {
            if ($this->getUser($id)) {
                $this->tableGateway->update($data, array('ID' => $id));
            } else {
                throw new \Exception('Form id does not exist');
            }
        }
    }

    public function deleteUser($id)
    {
        $this->tableGateway->delete(array('ID' => $id));
    }
}