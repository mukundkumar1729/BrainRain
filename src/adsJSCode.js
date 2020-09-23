const widgets = [
    {
        url:"https://widget.cuelinks.com/widgets/50038?cid=97511",
        text:"Health and Beauty Products"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50037?cid=97511",
        text:"Trending Books"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50035?cid=97511",
        text:"Electronics Items"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50034?cid=97511",
        text:"Kids Essentials"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50056?cid=97511",
        text:"Fashion Items"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50058?cid=97511",
        text:"Flowers & Gifts"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50060?cid=97511",
        text:"Home & Kitchen"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50062?cid=97511",
        text:"Services"
    }
];


const amazonAds1= [
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B08GM8L1HV&asins=B08GM8L1HV&linkId=5430e30376e3b37f1d115253c66d4ecc&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`IKALL WiFi Tablet - N7 (2GB Ram + 16GB Storage)`,
        info:`7 Inch Display ||it support only wifi to run internet || 2MP rear and 0.3MP front camera || 3000 mAh battery || 2GB Ram and 16GB Internal Storage`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B082HL9MJS&asins=B082HL9MJS&linkId=d034a20631f455e70a8da54421527952&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`IKall N5 4G Calling Tablet with 7 Inch Display Dual Sim 2GB Ram and 16GB Internal Memory (White)`,
        info:`7 Inch Display ||b4G VolTe || 5MP rear and 2MP front camera || 3000 mAh battery || 2GB Ram and 16GB Internal Storage`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B08HLR9JG8&asins=B08HLR9JG8&linkId=678b6943add8b3821258a6767af8a387&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`I KALL K800 (2GB, 16GB) (Blue)`,
        info:`5.5 Inch IPS Display || 2500 mAh Battery || 2GB RAM and 16GB Internal Memory || 5MP Rear and 2MP Front Camera`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B089GRBSDJ&asins=B089GRBSDJ&linkId=8cc9ebdaf007fc6fa136df4f30b1fad9&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:``,
        info:`4 GB RAM | 64 GB ROM | 6.5 inch HD+ Display, 16MP + 2MP + 2MP | 8MP Front Camera, 5000 mAh Battery`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B075NKHHBV&asins=B075NKHHBV&linkId=e6ab4e7d80ba588204f3dd567884b69f&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Micromax Canvas Infinity 18:9`,
        info:`5.7-inch Screen, 13MP | 16MP Camera, 3GB | 32GB, 1.4GHz Quad-Core Processor, 2900 mAh Battery`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B010JMMW9A&asins=B010JMMW9A&linkId=c2cb5f6d1951471db6c23e4ed09fbc21&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`micromax canvas spark`,
        info:`4.7-inch Screen, 2MP | 8MP Camera, 1GB | 8GB, 1.3 Ghz Quad Core Processor, 2000mAh  Battery`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B07HGH88GL&asins=B07HGH88GL&linkId=216cbc1007aaf412f24eb06f306052df&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Samsung Galaxy M21 (Midnight Blue, 6GB RAM, 128GB Storage)`,
        info:`48MP + 8MP + 5MP Main | 20MP front Camera | 6.4-inch Display, FHD+ Resolution (2340 x 1080) | 6000 mAh Battery | Android 10.0 OS, 2.3GHz, 1.7GHz Octa-Core processor, 6GB | 128GB`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B07N1FR7N9&asins=B07N1FR7N9&linkId=f71aee671bc54bc9f4e25638ebf6dabc&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Micromax Infinity N12 (Viola, 3GB, 32GB Storage) (Viola)`,
        info:`3 GB | 32GB , 2.0 GHz Octa Core Processor, 4000mAh Battery`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B07GRXX9F1&asins=B07GRXX9F1&linkId=b610455f2f7b3786d6ab80bfea539081&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Microtek UPS EB 700 VA UPS Inverter`,
        info:``
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B01DDP85BY&asins=B01DDP85BY&linkId=bc9fd3768c1a7a777e62c5b44eb889da&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Moto G Plus, 4th Gen (White, 32 GB)`,
        info:`16 MP | 5 MP camera  | 5.5-inh display | Android v6.0.1 Marshmallow OS | 1.5 GHz Qualcomm SnapdragonTM 617 octa-core processor, 3GB | 32GB | 3000 mAh`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B07PZZLR4D&asins=B07PZZLR4D&linkId=868a950bea5939fe80d89afc87974acf&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Motorola Moto G7 (Black, 4GB RAM, 64GB Storage)`,
        info:`4 GB RAM | 64 GB ROM | 6.2 inch Full HD+ Display | 12MP + 5MP | 8MP Front Camera | 3000 mAh Battery | Qualcomm Snapdragon 632 Processor`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B00X1KGBJU&asins=B00X1KGBJU&linkId=51d247438a696384e2e04e8c5e0228cf&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Micromax Canvas Nitro 2 E311 (Grey-Silver)`,
        info:`5-inch Screen, 5MP Camera, 1GB | 8GB, 1.4 Ghz Octa Core Processor, 2400mAh  Battery`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B07CJFKN5X&asins=B07CJFKN5X&linkId=da7828dafaff8ec556896f18277284f9&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Micromax Canvas IN8INITY Life(Black)`,
        info:`5.45 inch HD+ Display, 2 GB RAM | 16 GB ROM | 13MP Rear Camera | 8MP Front Camera, MediaTek MT6737 Cortex-A53 64-bit Processor`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B00BX5FOCK&asins=B00BX5FOCK&linkId=5f249a918611b419c98db0b871369be2&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`SanDisk Cruzer Blade 64GB USB 2.0 Flash Drive`,
        info:``
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B00BX5FOCK&asins=B00BX5FOCK&linkId=5f249a918611b419c98db0b871369be2&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Micromax Dual 5 E4820 (Champagne, 128GB)`,
        info:`13MP + 13MP camera, 5.5-inch touchscreen with 1080 x 1920 pixels resolution, Android 6.0 OS with 1.8GHz octa core processor, 4GB RAM, 128GB (4G+4G)
        3200mAH lithium-ion battery`
    }
];

const amazonAds2 =[
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B07M6Z816B&asins=B07M6Z816B&linkId=08a61731a8f6059abb1a82b79da20ef6&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Dettol Skincare Germ Protection Handwash Liquid Soap Refill, 1500ml`,
        info:``
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B015PL0HG0&asins=B015PL0HG0&linkId=c635d698d8094d5d596a901e83d4ac94&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Savlon Antiseptic Disinfectant Liquid - 1000ml`,
        info:``
   },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B06Y5M3D4P&asins=B06Y5M3D4P&linkId=c6a00914613d728899ae9b29d9de1289&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`AmazonBasics Internal Frame (Hardback) Hiking Backpack with Raincover`,
        info:`Internal-frame backpack with 55 L capacity (50 L + 5 L extension collar), Open-cell foam lumbar pad and molded channels for lower-back support and airflow, Waterproof cover included for heavier rain`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B081MTF2SK&asins=B081MTF2SK&linkId=6e385a0e0b32c8467a16df22fd675941&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Fedus Multipurpose Heating Pad For Pain Relief of Back, Shoulder, Knee, Elbow Heating Pad (Size-8x12)`,
        info:`Ultraheat Technology achieves highest temperature & maintains consistent heat for maximum relief. Ideal for Hot Therapy in order to relieve pain, stress, and discomfort in the lumbar/lower back area and abdominal/stomach area, muscle stiffness, joint pain and body cramps arthritis, cold womb, and cold weather.`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B0857DZ41C&asins=B0857DZ41C&linkId=205c5e512e765aefd2d4e6fad7a65f1d&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Praxon Adjustable 6 Vibration Modes 10 Frequency Feet Muscle Massage Machine`,
        info:`Praxon Adjustable 6 Vibration Modes 10 Frequency Feet Muscle Massage Machine for Promoting Blood Circulation Relaxing Pressure Muscle Pain Relief || Wireless Low Frequency Feet Simulator Massage Mat`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B01GPMV4RO&asins=B01GPMV4RO&linkId=99780f514aeac012013af84b2a6cca5d&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Dr. Ortho Oil Subscribe and Save : 5% | 10%`,
        info:``
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B00F38B3NW&asins=B00F38B3NW&linkId=b7461a2a3e3caa5146f2f37f7f9723e8&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Omron HEM 7120 Fully Automatic Digital Blood Pressure Monitor With Intellisense Technology For Most Accurate Measurement`,
        info:``
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B07QFX7PWS&asins=B07QFX7PWS&linkId=778059fc15f0f2299ce9ec85c9b604b9&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Philips T Bulb Curve, 12 Watt, Base B22, Cool Daylight`,
        info:``
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B075V7T4F4&asins=B075V7T4F4&linkId=40564c02227faef708f24ea72514bee9&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Waist Bag`,
        info:`2 zippered compartments with 1 interior and 1 mesh pockets and  1 outer pocket for cell phones, 1 Pen/Tactical Torch Latch, `
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B01C8QIBJ0&asins=B01C8QIBJ0&linkId=34ed9ef51160f7f5f6bfe29474975e08&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Patanjali Honey, 1kg, Subscribe & Save: 5% / 10%`,
        info:``
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B073JWDLXZ&asins=B073JWDLXZ&linkId=939631059610ef30044868914b652752&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Skybags Rubik Polyester 68 Cms Blue Softsided Check-in Luggage (STRUW68EBLU)`,
        info:`Capacity: 66 liters; Weight: 4500 grams; Dimensions: 46.5 cms x 31.5 cms x 68.5 cms (LxWxH), Number Lock, Number of Wheels: 4`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B086T4WGRY&asins=B086T4WGRY&linkId=c473c2c768ca22f1705209fbdee045f2&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Dettol Original Germ Protection Bathing Soap bar, 125gm (Pack of 5)`,
        info:``
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B00LVKUNJG&asins=B00LVKUNJG&linkId=4f05666ab80737798ce6cc1aa541a247&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Orthopaedic Back Rest`,
        info:`Light weight and portable back rest gives spinal support when placed on any chair , auto seat or sofa, Removes discomfort and pain after surgery`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B08HLS63WG&asins=B08HLS63WG&linkId=ded2c17e943bdebb2b110ae82c31cc3a&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Ergonomic High-Back Office Revolving Chair with Nylon Base,Adjustable Arms`,
        info:``
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B08FMPDPZ3&asins=B08FMPDPZ3&linkId=f25f38317e67e8e699bc4457c8bbc985&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Fiber with Cotton Cloth 24x24 Inch Cushion Filler,1 pc,Vacuum Packing,Breathable Washable Quality`,
        info:``
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B07PF71VG7&asins=B07PF71VG7&linkId=011c42d67340edf706ae113df0756c4d&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`CITRA Led Bulb B22 base, 45 Watt 6000 K,Cool White LED Light`,
        info:`B22 Socket, 30,000 HOUR LIFETIME or 16 years with 5 hrs/day of use. High Power Factor For Lower Electricity Consumption, Cool white 6000K Light TURNS ON INSTANTLY, Minimum of 100lm/watt.`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B07KXW1GXT&asins=B07KXW1GXT&linkId=885b9b4b1da40dd1833470710c2f5de6&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`PHILIPS 30-Watts B22 LED White;Cool Day Light T-Bulb, Pack of 3`,
        info:`B22 Socket, 30,000 HOUR LIFETIME or 16 years with 5 hrs/day of use. High Power Factor For Lower Electricity Consumption, Cool white 6000K Light TURNS ON INSTANTLY, Minimum of 100lm/watt.`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B016J3NR4C&asins=B016J3NR4C&linkId=02aefffa9ba04ad11c813fc5766a7b14&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`A2Z A To Z Traders Electric Lotus Diya/Deepak Light Lamp, Golden with 1 Hand Shape LED Light Keychain`,
        info:``
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B016J3NYD6&asins=B016J3NYD6&linkId=20e7753305385b4b4d18d71f7764e655&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`A2Z Electric Multicolour OM LED Light Lamp for Pooja/Puja/Mandir/Home Decoration and 1 Hand LED Shape Light Key Chain`,
        info:``
    } 
];

const cueLinksAds = [
    {
        url:"",
        image:"",
        text:"" 
     },
    {
        url:"",
        image:"",
        text:"" 
     },
    {
       url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.rufilo.user",
       image:"rufilo.png",
       text:"Rufilo - India’s first SMaRT credit card discovery and instant credit line based personal loan platform." 
    },
    {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.nextbillion.groww",
        image:"groww.png",
        text:"invest in direct mutual funds with zero commission for free. Switch your regular investments to direct." 
     },
    {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dio.chingari.app",
        image:"chingari.png",
        text:"The Chingari App allows users to record and share short videos with incredible filters and games.It also provides users with a platform to connect with people through the Direct Message feature." 
     },
    {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fthemomsco.com%2F",
        image:`theMomsCo.png`,
        text:"Buy natural products Online" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.shopclues.com%2F",
        image:`shopclues.png`,
        text:"" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.voot.com%2F",
        image:`vootKids.png`,
        text:"vootkids provides entertaining & learning experience for the kids" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.unacademyapp",
        image:`unacademy.png`,
        text:"Unacademy is a learning platform" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fstore.adda247.com%2Fhome",
        image:`adda247.jpg`,
        text:"Adda247 is examination specific" 
     },
     {
        url:"",
        image:`edureka.png`,
        text:"edureka!" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.testbook.tbapp",
        image:`testbook.png`,
        text:"Testbook is for Online Exam Preparation, provides Free Mock Tests" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fgoprep.co%2F",
        image:`goprep.png`,
        text:"Goprep is e-learning platform for Classes 8th to 12th" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dco.gradeup.k12",
        image:`goprep.png`,
        text:"Install Goprep App" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.skillzcafe.com%2F",
        image:`skillzCafe.png`,
        text:"Skillzcafe is an online learning market place" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Ftestseries.edugorilla.com%2F",
        image:`eduGorilla.png`,
        text:"EduGorilla is an educational community, encapsulates every exam held in the country" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.vidyakul.com%2F",
        image:`vidyakul.png`,
        text:"Vidyakul is an interactive e-learning platform" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.vidyakul.com%2F",
        image:`DataCamp.png`,
        text:"DataCamp lets us to understand the language of data" 
     }
];

function CueLinksWidgets() {
    let html = "";
    let cueLinksWidgets
    for(let i in widgets){
        html += `
                 <div class='carousel-item ${html==""?"active":""}'>
                    <span style='color:'${(i%3==1)?"red":(i%3==2)?"green":"white"}'> ${widgets[i].text}</span><br/>
                    <iframe width='300' height='250' src='${widgets[i].url}'></iframe>
                 </div>
        `;
    }
    return html;
}

function AmazonAds(amazonAds,counter=0) {
    let html = "";
    for(let i in amazonAds){
        if(amazonAds[i].url != ''){
        html += `
                 <div class='carousel-item ${html==""?"active":""}'>
                    <span style='${((i+counter)%3==1)?"color:red":((i+counter)%3==2)?"color:green":"color:white"}'> ${amazonAds[i].text}</span><br/>
                    <div class="row">
                        <div class="col-md-6 col-6">${amazonAds[i].url}</div>
                        <div class="col-md-6 col-6"><span style=${((i+counter)%3==1)?"color:red":((i+counter)%3==2)?"color:green":"color:white"}> ${amazonAds[i].info}</span><br/></div>
                    </div>
                 </div>
        `;
    }
}
    return html;
}

function CueLinksAdsScript() {
    var n = document.createElement("script");
    n.type = "text/javascript", n.async = !0, n.src = ("https:" == document.location.protocol ? "https://cdn0.cuelinks.com/js/" : "http://cdn0.cuelinks.com/js/") + "cuelinksv2.js", document.getElementsByTagName("body")[0].appendChild(n)
}

function CueLinksAds() {
    let html = "";
    let isApplycolour = false;
    for(let prop of cueLinksAds){
        isApplycolour = !isApplycolour;
        if(prop.url !=""){
        html += `
        <div class="row">
            <div class="col-md-6 col-6">
                <a onclick="RedirectTo('${prop.url}')"><img src="${baseUrl}/image/${prop.image}" style="height:75px;width:125px"/></a>
            </div>
            <div class="col-md-6 col-6">
                <span style="color:${isApplycolour?"white":"black"}">${prop.text}</span>
            </div>
        </div>
        `;
        }
    }
    return html;
}

$(document).ready(function() {
    $("#adsSection #amazonCarousel1 .carousel-inner").before(`<h3 style="margin-top:25px;">Get Best Shopping Deals at amazon</h3>`);
    $("#adsSection #amazonCarousel1 .carousel-inner").html(AmazonAds(amazonAds1,0));
    $("#adsSection #amazonCarousel2 .carousel-inner").html(AmazonAds(amazonAds2,1));
    const url = window.location.href.toLowerCase();
    if(url.includes("https://brainrain.netlify.app")){
        CueLinksAdsScript();
        $("#adsSection #cueLinksCarousel .carousel-inner").html(CueLinksWidgets());
        $("#cueLinksAds").html(CueLinksAds());
    }
    $("adsSection").show();

});

{/* <script type="text/javascript">amzn_assoc_ad_type ="responsive_search_widget"; amzn_assoc_tracking_id ="mukundkumar17-21"; amzn_assoc_marketplace ="amazon"; amzn_assoc_region ="IN"; amzn_assoc_placement =""; amzn_assoc_search_type = "search_widget";amzn_assoc_width ="auto"; amzn_assoc_height ="auto"; amzn_assoc_default_search_category =""; amzn_assoc_default_search_key ="micromax";amzn_assoc_theme ="light"; amzn_assoc_bg_color ="FFFFFF"; <\/script>\n<script src="//z-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=IN"><\/script></script> */}
