import axios from 'axios';
import i18next from 'i18next';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const LiqPayCheckout = () => {
    const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:5007/api/liqpay/test').then(res=>{
        const script = document.createElement('script');
        script.src = "//static.liqpay.ua/libjs/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
        window.LiqPayCheckoutCallback = () => {
            window.LiqPayCheckout.init({
            data: res.data.data,
            signature: res.data.signature,
            embedTo: "#liqpay_checkout",
            language: i18next.language,
            mode: "embed"
            }).on("liqpay.callback", function(data){
            console.log(data.status);
            console.log(data);
            toast("Yep")
            }).on("liqpay.ready", function(data){
            // ready
            }).on("liqpay.close", function(data){
                
            });
        };
        };

        return () => {
        document.body.removeChild(script);
        };
    })
  }, []);

  return <div id="liqpay_checkout"></div>;
};

export default LiqPayCheckout;