import {Component} from "react" 

import Loader from "react-loader-spinner"

import CryptocurrenciesList from "../CryptocurrenciesList"

import "./index.css"
import { async } from "rxjs"

class CryptocurrencyTracker extends Component{
   
    state={cryptocurrenciesDate:[],isLoading:true}

    componentDidMount()=>{
        this.getCryptocurrencies()
    }

    getCryptocurrencies=async()=>{
        const response=await fetch("https://apis.ccbp.in/crypto-currency-converter")
        const data=await response.json()
       
        const updateData={
            id:data.id,
            currencyName:data.currency_name,
            usdValue:data.usd_value,
            euroValue:data.euro_value,
            currencyLogoUrl:data.currency_logo
        }
       this.setState({cryptocurrenciesDate:updateData,isLoading:false})
    }

    renderCryptocurrenciesList=()=>{
       const {updateData}=this.state 

       return <CryptocurrenciesList updateData={updateData}/>
    }

    renderLoader=()=>(
         <div>
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
        </div>
    )
    
    render(){
        const {isLoading}=this.state

        return(
            <div className="app-container">
                {isLoading?this.renderLoader():this.renderCryptocurrenciesList()}
            </div>
        )
    
    }

}
export default CryptocurrencyTracker