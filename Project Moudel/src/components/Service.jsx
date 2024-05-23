import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
export default function Service() {
  return (
    <>
      <div class="policy-description">
        <div class="policy-item">
          <FontAwesomeIcon icon={faTruckFast} />
          <p>Giao hàng miễn phí</p>
        </div>
        <div class="policy-item">
          <FontAwesomeIcon icon={faCreditCard} />
          <p>Thanh toán khi nhận hàng</p>
        </div>
        <div class="policy-item">
          <FontAwesomeIcon icon={faRotateLeft} className='rotate-icon'/>
          <p>Đổi trả trong 7 ngày</p>
        </div>
        <div class="policy-item">
          <FontAwesomeIcon icon={faHeadset} />
          <p>Hỗ trợ 24/7</p>
        </div>
      </div>
    </>
  );
}
