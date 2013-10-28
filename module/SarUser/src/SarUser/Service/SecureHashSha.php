<?php
/**
 *  SVEN ANDERS ROBBESTAD (C) 2009 <anders@robbestad.com>.
 *  @license   http://creativecommons.org/publicdomain/zero/1.0/legalcode CC0 1.0 Universal
 *
 *  http://www.robbestad.com
 *
 *  Description:
 *  SecureHash creates a hash based on blowfish.
 *  This combination creates a password hash that is is virtually impossible
 *  to crack without ludicrous amount of funds or hardware.
 *  The password simply cannot be decrypted without knowing the password, salt and hash.
 *
 *  USAGE:
 *  see demo.php
 *
 */
namespace SarUser\Service;

class secureHashSha
{
    private function createSalt()
    {
        # Create random hash based on the current time in microseconds
        # 'true' adds additional entropy (using the combined linear congruential generator)
        return $this->salt = uniqid(rand(), true);
    }

    public function returnHash($input)
    {
        # Checks if submitted var is longer than 3 chars
        if (strlen($input) < 3)
            return false;

        # Will return an array with a hashed password and the salt it used
        return (array($this->CreateSalt(), $this->CreateHash($input, $this->salt)));
    }

    public function verifyHash($input, $hash, $salt)
    {
        $checkHash = $this->CreateHash($input, $salt);
        if ($checkHash == $hash)
            return true;
        else
            return false;
    }

    private function createHash($input, $salt)
    {
        # Create hash on supplied input and salt. Can be used to create new hash
        # or verify existing
        return $this->hash = hash("sha256", $input . $salt); //function "hash" req. php v5.1.2 or better
    }
}

?>
