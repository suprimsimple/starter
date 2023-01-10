<?php
require 'checkenv.php';

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */
$assetsFolderPath = 'volumes';
$assetsBaseUrl = getenv('ASSETS_BASE_URL') === '/' ? getenv('ASSETS_BASE_URL') . $assetsFolderPath : getenv('ASSETS_BASE_URL');

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,

        // Default Language (also controls date format!)
        'defaultCpLanguage' => 'en-GB',

        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,

        // Whether "index.php" should be visible in URLs
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'admin',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),

        // Allow json for embedded videos plugin
        'extraAllowedFileExtensions' => 'json',

        // Fuzzy search
        'defaultSearchTermOptions' => array(
            'subLeft' => true,
            'subRight' => true,
        ),

        // No-one wants to set a username
        'useEmailAsUsername' => true,

        // Bumped to 32MB
        'maxUploadFileSize' => 33554432,

        // Disable public templates
        'privateTemplateTrigger' => '',

        // Make Craft generate image transforms, not users
        'generateTransformsBeforePageLoad' => true,

        // Aliases
        'aliases' => [
            '@assetsBaseUrl' => $assetsBaseUrl,
            '@assetsBasePath' => CRAFT_PUBLIC_PATH . "/" . $assetsFolderPath,
            '@secureAssetBasePath' => CRAFT_BASE_PATH . "/" . getenv('SECURE_ASSETS_FOLDER'),
        ],
    ],

    // Dev environment settings
    'dev' => [

        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true,

        // Whether to enable Craft's template {% cache %} tag
        'enableTemplateCaching' => false,

        // Enable public templates for testing
        'privateTemplateTrigger' => '_',
    ],

    // Staging environment settings
    'staging' => [],

    // Production environment settings
    'production' => [],
];
