import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <Product />
    </div>
  );
}

function Product() {
  const product = {
    plan_name:"FREE",
    plan_price:"$0",
    plan_month:"/month",
    plan_user:"Single User",
    plan_storage:"50GB Storage",
    plan_public:"Unlimited Public Projects",
    plan_access:"Community Access",
    plan_private:"Unlimited Private Projects",
    plan_phone:"Dedicated Phone Support",
    plan_domain:"Free Subdomain",
    plan_reports:"Monthly Status Reports"   
  }

  const product1 = {
    plan_name:"Plus",
    plan_price:"$9",
    plan_month:"/month",
    plan_user:"5 Users",
    plan_storage:"50GB Storage",
    plan_public:"Unlimited Public Projects",
    plan_access:"Community Access",
    plan_private:"Unlimited Private Projects",
    plan_phone:"Dedicated Phone Support",
    plan_domain:"Free Subdomain",
    plan_reports:"Monthly Status Reports"   
  }

  const product2 = {
    plan_name:"Pro",
    plan_price:"$49",
    plan_month:"/month",
    plan_user:"Unlimited Users",
    plan_storage:"150GB Storage",
    plan_public:"Unlimited Public Projects",
    plan_access:"Community Access",
    plan_private:"Unlimited Private Projects",
    plan_phone:"Dedicated Phone Support",
    plan_domain:"Free Subdomain",
    plan_reports:"Monthly Status Reports"   
  }
  return(
    <section class="pricing py-5">
      <div class="container">
         <div class="row">
      
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{product.plan_name}</h5>
            <h6 class="card-price text-center">{product.plan_price}<span class="period">{product.plan_month}</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product.plan_user}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product.plan_storage}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product.plan_public}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product.plan_access}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{product.plan_private}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{product.plan_phone}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{product.plan_domain}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{product.plan_reports}</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{product1.plan_name}</h5>
            <h6 class="card-price text-center">{product1.plan_price}<span class="period">{product1.plan_month}</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product1.plan_user}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product1.plan_storage}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product1.plan_public}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product1.plan_access}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product1.plan_private}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product1.plan_phone}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product1.plan_domain}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{product1.plan_reports}</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{product2.plan_name}</h5>
            <h6 class="card-price text-center">{product2.plan_price}<span class="period">{product2.plan_month}</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product2.plan_name}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product2.plan_storage}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product2.plan_public}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product2.plan_access}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product2.plan_private}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product2.plan_phone}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product2.plan_domain}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{product2.plan_reports}</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
  </section>
  
  
  )

  
  
}

export default App;
