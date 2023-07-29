import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
 } from '@chakra-ui/react'

 import { Divider } from '@chakra-ui/react'
 import { Button} from '@chakra-ui/react'

 import SereneLogo from '../../assets/logo/serene-logo.png'
 import BeautyProducts1 from '../../assets/products/nora-tropicals-products-initial.png'
 import BeautyProducts2 from '../../assets/products/nora-tropicals-product-initial.png'
 import EllipseBcg from '../../assets/background/ellipse.png'
 
function HeaderSerene() {
   return(
      <>
         <nav>
            <img src={SereneLogo} alt='Serene Beauty Shop'/>
            <Breadcrumb separator='/'>
               <BreadcrumbItem>
                  <BreadcrumbLink href='serene-home'>Home</BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbItem>
                  <BreadcrumbLink href='#'>Blog</BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbItem>
                  <BreadcrumbLink href='#'>About</BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbItem>
                  <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
               </BreadcrumbItem>
            </Breadcrumb>
            <div>Cart(0)</div>
            <Divider borderColor='#D9D9D9' borderWidth='2px'/>
         </nav> 
         <section id='serene-home'>
            <div className='beauty-products-about'>
               <h6>Beauty Products</h6>
               <h1>Skin care made simple & affordable</h1>
               <p>Feugiat tellus metus lacus vulputate sed nec, feugiat at. Ac ultrices facilisis suspendisse nec sagittis, mauris quisque pellentesque tincidunt. Semper habitasse id tincidunt et rhoncus placerat fusce.</p>
               <Button borderColor='#6E6760.300' borderRadius='none' variant='outline' size='lg' _hover={{ bg: '#ADA670' }}>Shop now</Button>
            </div>
            <div className='beauty-products-images-hdr'>
               <img src={BeautyProducts1} alt='Nora Tropicals'/>
               <img src={BeautyProducts2} alt='Nora Tropicals'/>
               <img src={EllipseBcg} alt='Ellipse'/>
            </div>
         </section>
      </>
   )
}

export default HeaderSerene