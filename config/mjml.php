<?php


return [
    // The path to where the your version of Node is located, i.e. `/usr/local/bin/node`
    'nodePath'  => getenv('NODE_PATH'),

    // The path to where the MJML cli installed with npm is located, i.e. `/usr/local/bin/mjml`
    'mjmlCliPath'   => getenv('MJML_PATH'),

    // The app id received by email
    'appId'     => '',

    // Enter the secret key received by email
    'secretKey' => '',
];
