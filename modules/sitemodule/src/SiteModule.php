<?php
/**
 * SiteModule module for Craft CMS 3.x
 *
 * -
 *
 * @link      simple.com.au
 * @copyright Copyright Simple
 */

namespace modules\sitemodule;

use modules\sitemodule\twigextensions\SiteModuleTwigExtension;

use Craft;
use craft\events\RegisterTemplateRootsEvent;
use craft\web\View;

use yii\base\Event;
use yii\base\Module;

/**
 * Class SiteModule
 *
 * @author    Simple
 * @package   SiteModule
 * @since     1.0.0
 *
 */
class SiteModule extends Module
{
    // Static Properties
    // =========================================================================

    /**
     * @var SiteModule
     */
    public static $instance;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function __construct($id, $parent = null, array $config = [])
    {
        Craft::setAlias('@modules/sitemodule', $this->getBasePath());
        $this->controllerNamespace = 'modules\sitemodule\controllers';

        // Base template directory
        Event::on(View::class, View::EVENT_REGISTER_CP_TEMPLATE_ROOTS, function (RegisterTemplateRootsEvent $e) {
            if (is_dir($baseDir = $this->getBasePath().DIRECTORY_SEPARATOR.'templates')) {
                $e->roots[$this->id] = $baseDir;
            }
        });

        // Set this as the global instance of this module class
        static::setInstance($this);

        parent::__construct($id, $parent, $config);
    }

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
        self::$instance = $this;

        Craft::$app->view->registerTwigExtension(new SiteModuleTwigExtension());
    }

    // Protected Methods
    // =========================================================================
}
