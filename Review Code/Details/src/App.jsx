import React from 'react'
import './App.css'

export default function App() {
  return (
    <div>
      <div id='details'>
        <div className='details-img'>
          <img src="../public/iPhone-15-15-plus_colors_Pink-4.jpg" alt="" />
        </div>
        <div className='details-content'>
            <h1>Iphone 15 Promax Pink</h1>
            <p>18.990.000 VND</p>
            <p>Đặc điểm nổi bật của iPhone 15 128GB: <br />
              Sử dụng kiểu hình notch Dynamic Island  <br />
              Ra mắt với 5 phiên bản màu sắc và được làm từ kính pha màu <br />
              Sử dụng Chip A16 Bionic cho hiệu năng vượt trội <br />
              Trang bị camera chính 48 MP, Telephoto 2x cho khả năng chụp ảnh sắc nét <br />
              Màn hình OLED Super Retina XDR cho chất lượng đồ họa lý tưởng <br />
              Hỗ trợ sẵn hệ điều hành iOS 17 mới nhất 2023</p>
              <button>Thêm vào giỏ hàng</button>
              <button>Thanh toán</button>
              <button>Mua trả góp - duyệt hồ sơ trong 3 phút</button>
              <button>Mua trả góp qua thẻ</button>
        </div>
      </div>
    </div>
  )
}
