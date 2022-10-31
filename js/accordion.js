$(document).ready(function() {

    var $list = $('#menu-about');
    var $list2 = $('#menu-services');
    var $list3 = $('#menu-shop');
    var $ddl  = $('#ddl-about');
    var $ddl2  = $('#ddl-services');
    var $ddl3  = $('#ddl-shop');
    var $afterAbout  = $('#menu-about-after');
    var $afterServices  = $('#menu-services-after');
    var $afterShop  = $('#menu-shop-after');
    console.log($list);
    console.log($ddl);
    $list.click(function(){
        $ddl.toggleClass('active');
        console.log($ddl);
        $afterAbout.toggleClass('open');
    });
    $list2.click(function(){
        $ddl2.toggleClass('active');
        console.log($ddl2);
        $afterServices.toggleClass('open');
    });
    $list3.click(function(){
        $ddl3.toggleClass('active');
        console.log($ddl3);
        $afterShop.toggleClass('open');
    });
});
