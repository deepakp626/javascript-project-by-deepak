  //all variabal
        let inputEl = document.getElementById("input")
        let productContainerEl = document.getElementById("productContainer")
        /// all product in this array from api fetch
        let allproduct ;

        const renderProduct = (data) => {
            productContainerEl.innerHTML = ""
            data.forEach((item) => {
                productContainerEl.innerHTML += ` <div class="products">
                <div class="image">
                    <img src="${item.image}" alt="product image">
                </div>
                <div class="allabout">
                    <div class="name">
                        <h3 class="tital">${item.title}</h3>
                        <h4  class="description">${item.description}</h4>
                    </div>
                    <div class="rate">
                        <div>Rating ${item.rating.rate}</div>
                        <div class="price">${item.price} $</div>
                    </div>
                </div>
             </div> `
            })
        }

        const fetchProduct = async () => {
            let product;
            try {
                product = await fetch("https://fakestoreapi.com/products")
                product = await product.json()
                allproduct = product;
            } catch (e) {
                console.log("product not found")
                productContainerEl.innerHTML = "<h3>Products not found</h3>"
                return;
            }
            renderProduct(allproduct)
        }
        fetchProduct()

        const checkProduct = (product, searchText) => {
            if (product.title.toLowerCase().includes(searchText) ||
                product.description.toLowerCase().includes(searchText) ||
                product.price.toString().includes(searchText)) {
                return true;
            } else {
                return false;
            }
        }

        const getProducts = () => {
            let searchText = inputEl.value.toLowerCase().trim();
            let newArray = allproduct.filter((product) => {
                if (checkProduct(product, searchText)) {
                    console.log("find")
                    return product;
                } else {
                    console.log("not find")
                }
            })
            if (newArray.length <= 0) {
                productContainerEl.innerHTML = "<h3>Products not found</h3>"
                return;
            }
            console.log(newArray)
            renderProduct(newArray)
            console.log("Done ")
        }
        inputEl.addEventListener("keyup", getProducts)