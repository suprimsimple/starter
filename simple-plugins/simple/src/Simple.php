<?php

/**
 * Simple plugin for Craft CMS 3.x
 *
 * This is another awesome plugin crafted by Simple ❤️.
 *
 * @link      https://simple.com.au
 * @copyright Copyright (c) 2019 Simple Integrated Marketing
 */

namespace simple\simple;

use Craft;
use craft\base\Plugin;
use craft\events\PluginEvent;
use craft\events\RegisterUrlRulesEvent;
use craft\services\Plugins;
use craft\web\twig\variables\CraftVariable;
use craft\web\UrlManager;
use simple\simple\services\Example as ExampleService;
use simple\simple\twig\SimpleTwigExtension;
use simple\simple\variables\SimpleVariable;
use yii\base\Event;


/**
 * Class Simple
 *
 * @author    Simple Integrated Marketing
 * @package   Simple
 * @since     1.0.0
 *
 * @property  ExampleService $example
 */
class Simple extends Plugin
{
    // Static Properties
    // =========================================================================

    /**
     * @var Simple
     */
    public static $plugin;


    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
        self::$plugin = $this;
        $this->setComponents([
            "example" => ExampleService::class,
        ]);

        Event::on(
            UrlManager::class,
            UrlManager::EVENT_REGISTER_SITE_URL_RULES,
            function (RegisterUrlRulesEvent $event) {
                $event->rules['siteActionTrigger1'] = 'simple/example';

                $event->rules['secure-files/download'] = 'simple/secure-download/download';
            }
        );

        Event::on(
            UrlManager::class,
            UrlManager::EVENT_REGISTER_CP_URL_RULES,
            function (RegisterUrlRulesEvent $event) {
                $event->rules['cpActionTrigger1'] = 'simple/example/do-something';
            }
        );



        Event::on(
            CraftVariable::class,
            CraftVariable::EVENT_INIT,
            function (Event $event) {
                /** @var CraftVariable $variable */
                $variable = $event->sender;
                $variable->set('simple', SimpleVariable::class);
            }
        );

        Event::on(
            Plugins::class,
            Plugins::EVENT_AFTER_INSTALL_PLUGIN,
            function (PluginEvent $event) {
                if ($event->plugin === $this) {
                }
            }
        );

        Craft::$app->view->registerTwigExtension(new SimpleTwigExtension());

        Craft::info(
            Craft::t(
                'simple',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================

}
