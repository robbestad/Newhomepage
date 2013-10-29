SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS `user` (
  `ID` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `Login` varchar(45) NOT NULL,
  `Password` varchar(64) NOT NULL DEFAULT '',
  `Last_login` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `Created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `Forum_Nick` varchar(20) NOT NULL DEFAULT '',
  `Signature` varchar(100) NOT NULL DEFAULT '',
  `Salt` varchar(40) NOT NULL DEFAULT '',
  `IP_Address` varchar(16) NOT NULL DEFAULT '',
  `Newsletter` tinyint(1) NOT NULL DEFAULT '1',
  `Avatar` varchar(16) NOT NULL,
  `Anonymous` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'If true, then user wants to be anonymous',
  `Unit_conversion` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1=metric, 2=imperial',
  `Innlogginger` int(11) NOT NULL DEFAULT '0' COMMENT 'Angir hver gang noen logger seg inn',
  `Userlevel` tinyint(1) NOT NULL DEFAULT '0',
  `Adminaccess` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1=adminaccess, 0=default, no access',
  `Detaljer` text NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Login` (`Login`),
  UNIQUE KEY `Forum_Nick` (`Forum_Nick`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9260 ;

INSERT INTO `user` (`ID`, `Login`, `Password`, `Last_login`, `Created`, `Forum_Nick`, `Signature`, `Salt`, `IP_Address`, `Newsletter`, `Avatar`, `Anonymous`, `Unit_conversion`, `Innlogginger`, `Userlevel`, `Adminaccess`, `Detaljer`) VALUES
(17, 'Anders', '30870b0c5a99e7c36eb582f2c375b9517f9ffaec2922fc71a3bb0fdd77d2dfe8', '2013-06-19 11:24:40', '2009-09-11 10:03:22', 'Anders', '', '988450963510d09c603a7e6.99408795', '82.146.78.75', 1, '17_64.jpg', 1, 1, 44, 9, 1, '');
