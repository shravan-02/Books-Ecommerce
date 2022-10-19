import React from 'react'
function Cart() {
  return (
         <div class="cart-container">
    <div class="cartheading">
      <h1 className='h1-cart'>
        <span class="shopper">Cart</span> 
      </h1>

      <a href="#" class="visibility-cart transition is-open">X</a>
    </div>

    <div class="cart transition is-open">

      <a classNme="a-cart" href="#" class="btn btn-update">Update Cart</a>


      <div class="cart-table">

        <div class="layout-inline row th">
          <div class="col col-pro">Product</div>
          <div class="col col-price align-center ">
            Price
          </div>
          <div class="col col-qty align-center">QTY</div>
          <div class="col">VAT</div>
          <div class="col">Total</div>
        </div>

        <div class="layout-inline row">

          <div class="col col-pro layout-inline">
            <img src="https://cdn01.sapnaonline.com/product_media/9788172344504/md_9788172344504_300620201142862.jpg" alt="" />
            <p>Pride and Prejudice</p>
          </div>

          <div class="col col-price col-numeric align-center ">
            <p>Rs 680</p>
          </div>

          <div class="col col-qty layout-inline">
            <a href="#" class="qty qty-minus">-</a>
            <input type="numeric" value="3" />
            <a href="#" class="qty qty-plus">+</a>
          </div>

          <div class="col col-vat col-numeric">
            <p>Rs 120</p>
          </div>
          <div class="col col-total col-numeric">
            <p>Rs 800</p>
          </div>
        </div>

        <div class="layout-inline row row-bg2">

          <div class="col col-pro layout-inline">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg" alt="" />
            <p>To Kill A Mocking Bird</p>
          </div>

          <div class="col col-price col-numeric align-center ">
            <p>Rs 400</p>
          </div>

          <div class="col col-qty  layout-inline">
            <a href="#" class="qty qty-minus ">-</a>
            <input type="numeric" value="1" />
            <a href="#" class="qty qty-plus">+</a>
          </div>

          <div class="col col-vat col-numeric">
            <p>Rs 85</p>
          </div>
          <div class="col col-total col-numeric">
            <p>Rs 485</p>
          </div>

        </div>

        <div class="layout-inline row">

          <div class="col col-pro layout-inline">
            <img src="https://m.media-amazon.com/images/I/41XMaCHkrgL.jpg" alt="" />
            <p>The Great Gatsby</p>
          </div>

          <div class="col col-price col-numeric align-center ">
            <p>Rs 650</p>
          </div>

          <div class="col col-qty layout-inline">
            <a href="#" class="qty qty-minus">-</a>
            <input type="numeric" value="3" />
            <a href="#" class="qty qty-plus">+</a>
          </div>

          <div class="col col-vat col-numeric">
            <p>Rs 100</p>
          </div>
          <div class="col col-total col-numeric">
            <p>Rs 750</p>
          </div>
        </div>

        <div class="tf">
          <div class="row layout-inline">
            <div class="col">
              <p>VAT</p>
            </div>
            <div class="col"></div>
          </div>
          <div class="row layout-inline">
            <div class="col">
              <p>Shipping</p>
            </div>
            <div class="col"></div>
          </div>
          <div class="row layout-inline">
            <div class="col">
              <p>Total</p>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>

      <a href="#" class="btn btn-update">Update Cart</a>

    </div>
    </div>
  )
}

export default Cart