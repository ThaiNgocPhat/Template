import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div id='footer'>
        <footer class="footer">
        <div class="Address">
            <p>Write by Thai Ngoc Phat</p>
            <p>Website: <Link to="Dienthoaithongminh.com.vn">Dienthoaithongminh.com.vn</Link></p>
            <p>Email: <Link to="thaingocphat231@gmail.com">thaingocphat231@gmail.com</Link></p>
            <p>Phone: <Link to="0388892447">0388892447</Link></p>
            <p>Address: C2/33G Tan Kien Binh Chanh TpHCM</p>
            <p>&copy;2024 Cửa hàng được mọi nhà tin dùng</p>
        </div>
        <div class="About">
            <Link to="#">Giới thiệu</Link>
            <Link to="#">Chính sách bảo mật</Link>
            <Link to="#">Chính sách bảo hành</Link>
            <Link to="#">Chính sách đổi trả</Link>
        </div>
        <div class="Social">
            <Link to="#">Facebook</Link>
            <Link to="#">Twitter</Link>
            <Link to="#">Instagram</Link>
            <Link to="#">Youtube</Link>
        </div>
    </footer>
    </div>
    </>
  )
}
