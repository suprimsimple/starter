<?php

/**
 * Yii Application Config
 *
 * The array returned by this file will get merged with
 * vendor/craftcms/cms/src/config/app.php and app.[web|console].php, when
 * Craft's bootstrap script is defining the configuration for the entire
 * application.
 *
 * You can define custom modules and system components, and even override the
 * built-in system components.
 *
 * If you want to modify the application config for *only* web requests or
 * *only* console requests, create an app.web.php or app.console.php file in
 * your config/ folder, alongside this one.
 */

use craft\helpers\App;

return [
    '*' => [
        'modules' => [],
        'bootstrap' => [],
        'components' => [
            'deprecator' => [
                'throwExceptions' => YII_DEBUG,
            ],
        ],
    ],

    'dev' => [
        'components' => [
            'mailer' => function () {
                // Get the stored email settings
                $settings = App::mailSettings();

                // Override the transport adapter class
                $settings->transportType = \craft\mail\transportadapters\Smtp::class;

                // Override the transport adapter settings
                $settings->transportSettings = [
                    'host' => 'smtp.mailtrap.io',
                    'port' => '25',
                    'useAuthentication' => true,
                    'username' => '4062745cdf3d18',
                    'password' => '201323dd0a84a8'
                ];


                return Craft::createObject(App::mailerConfig($settings));
            }
        ]
    ]
];
