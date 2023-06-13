import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import './home.css'
import Header from '../Header/Header'

export default function Home() {
  const [category, setCategory] = useState([])
  const [shopCategory, setShopCategory] = useState([])
  const [productsByCategory, setProductsByCategory] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latlng = '11.025378,76.9758161'

        await axios.get(
          `http://ecommerce.toou.in:4011/customer/product_dashboard?id=${id}&geotag=${latlng}`,
        )

        const categoryUrl = `https://api.toou.in/main_category`
        const categoryResponse = await axios.get(categoryUrl)
        setCategory(categoryResponse.data.data)

        const shopCategoryUrl = 'https://api.toou.in/shop_category'
        const shopCategoryResponse = await axios.get(shopCategoryUrl)
        setShopCategory(shopCategoryResponse.data.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [id])

  useEffect(() => {
    // Filter products based on category
    const filteredProducts = shopCategory.filter((product) =>
      category.filter((cat) => cat._id === product.category._id),
    )
    setProductsByCategory(filteredProducts)
  }, [category, shopCategory])



  const handleClick = (categoryId) => {
    //handle product filtering
    const filteredProducts = shopCategory.filter(
      (product) => product.category._id === categoryId,
    )
    setProductsByCategory(filteredProducts)
  }

  return (
    <div className="home">
      <Header />
      <h1>Dashboard</h1>

      <div className="home-container">
        {category.map((elem) => (
          <div className="categories" key={elem._id}>
            <NavLink
              // activeClassName="active"
              style={{ textDecoration: 'none' }}
              onClick={() => handleClick(elem._id)}
            >
              <h4 className='btn'>{elem.name}</h4>
            </NavLink>
          </div>
        ))}
      </div>

      <div className="products-sec">
        <div className="products">
          {productsByCategory.map((product) => (
            <div className="product" key={product._id}>
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <p>{product.remark}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}
