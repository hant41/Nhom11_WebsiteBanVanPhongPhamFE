π€£ user
/user/login
/user/register
/user/about
/user/change-password
/user/carts
/user/purchased
π€£ home
/?page=?sort-by=?limit
π€£ product-detail
/product-detail
π€£ products
/products
================================================
π admin
/admin
π products 
/admin/manage-products->getAllProducts
/admin/manage-products/new-product->addNewProduct
/admin/manage-products/change-product/:id->changeProduct
/admin/manage-products/capacities/:id->getAllCapacities
/admin/manage-products/new-capacity/:id->addNewCapacity
/admin/manage-products/change-capacity/:id=&product_id=->changeCapacity
π brands
/admin/manage-bands->getAllBrands
/admin/manage-bands/new_brand->addNewBrand
π carts
/admin/manage-carts?status_id= ->getAllCarts
/admin/manage-carts:cart_id ->getInforCart
================================================
Large:
(   
    Sidebar
    Container(
        Main
    )
    Footer
)
Tablet:
(
    Navbar
    Container(
        Main    
    )
    Footer
)
=================================================

reload trang call checklogin->false
or {user, carts, roleId}
*khi chΖ°a login baseon roleId=null
    -availble: register, login

    -not allow:
*khi ΔΓ£ login
    -availble: change-password, about, carts, purchased










