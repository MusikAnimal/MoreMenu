/**
 * This script is for use in an individual user's global.js on Meta.
 *
 * THIS SHOULD NOT BE USED IN A PRODUCTION GADGET.
 * See [[meta:MoreMenu]] for documentation.
 */
mw.loader.using(['mediawiki.user', 'mediawiki.util', 'mediawiki.api'], function () {
    mw.loader.load('https://meta.wikimedia.org/w/load.php?modules=ext.gadget.MoreMenu.messages');
    mw.loader.load('https://meta.wikimedia.org/w/load.php?modules=ext.gadget.MoreMenu.user');
    mw.loader.load('https://meta.wikimedia.org/w/load.php?modules=ext.gadget.MoreMenu.page');
    mw.loader.load('https://meta.wikimedia.org/w/load.php?modules=ext.gadget.MoreMenu');
});
