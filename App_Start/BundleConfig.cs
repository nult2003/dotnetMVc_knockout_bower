using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace WebAppWithBower1.App_Start
{
    public static class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                        "~/lib/knockout/knockout.js"
                        //"~/Scripts/Vendors/Knockout/knockout.validation.js",
                        //"~/Scripts/Vendors/Knockout/knockout-handlers.js",
                        //"~/Scripts/Vendors/Knockout/knockout-extenders.js",
                        //"~/Scripts/Components/ComponentLoader.js",
                        //"~/Scripts/Vendors/Knockout/knockout-sortable.js",
                        //"~/Scripts/knockout.mapping-latest.js",
                        //"~/Scripts/Vendors/knockout-postbox/knockout-postbox.min.js"
            ));
            bundles.Add(new ScriptBundle("~/bundles/WebAppWithBower1/Product").Include(
                "~/data/readJson.js",
                "~/Scripts/app/Product/ProductVM.js"
            ));
            bundles.Add(new ScriptBundle("~/bundles/shared").Include(                
                "~/Scripts/BaseVM/RootViewModel.js"
            ));
        }
    }
}