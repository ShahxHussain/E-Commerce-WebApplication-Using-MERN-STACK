const Data = [
        { id: 1, variant: 'Inspiron', name: 'New Inspiron 12', generation: "13th Generation", price: 360000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7430-2in1-intel/spi/non-fpr/ng/notebook-inspiron-14-7430-silver-800x550.psd?fmt=png-alpha&wid=800&hei=550' },
        { id: 2, variant: 'Inspiron', name: 'Inspiron 15', generation: "13th Generation", price: 460000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/notebook-inspiron-15-3535-plastic-black-800x550.png?wid=800&hei=550' },
        { id: 3, variant: 'Inspiron', name: 'New Inspiron 16', generation: "Latest Generation", price: 490000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/16-5635-amd/spi/silver/fpr/ng/notebook-inspiron-16-5635-silver-800x550.png' },
        { id: 4, variant: 'Inspiron', name: 'Inspiron 14', generation: "12th Generation", price: 26000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/spi/platinum-silver/non-touch/ng/notebook-inspiron-14-5430-silver-800x550.png?fmt=png-alpha&wid=800&hei=550' },
        { id: 5, variant: 'Latitude', name: 'New Latitude 5440', generation: "13th Generation", price: 450000, imageUrl: 'https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/latitude-14-5440-800x550.png' },
        { id: 6, variant: 'Latitude', name: 'New Latitude 3440', generation: "12th Generation", price: 260000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-3440-laptop/spi/non-touch/ng/notebook-latitude-14-3440-uma-hd-gray-800x550.psd?fmt=png-alpha&wid=800&hei=550 ' },
        { id: 7, variant: 'Latitude', name: 'New Latitude 9330', generation: "12th Generation", price: 260000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/products/laptops-and-2-in-1s/latitude/13-9330-touch/spi/2-in-1/ng/notebook-latitude-13-9330-gray-800x550.png?fmt=png-alpha&wid=800&hei=550' },
        { id: 8, variant: 'Latitude', name: 'New Latitude 3540', generation: "12th Generation", price: 160000, imageUrl: 'https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/latitude-15-3540-800x550.png?wid=800&hei=550' },
        { id: 9, variant: 'XPS', name: 'XPS 15', generation: "12th Generation", price: 260000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/spi/ng/notebook-xps-15-9530-silver-800x550.png' },
        { id: 10, variant: 'XPS', name: 'XPS 13', generation: "12th Generation", price: 26000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/xps-13-9315-bl-800x550.png' },
        { id: 11, variant: 'XPS', name: 'XPS 13 Plus', generation: "13th Generation", price: 26000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/xps-13-9320-front-facing-silver-800x550.png' },
        { id: 12, variant: 'XPS', name: 'XPS 17', generation: "13th Generation", price: 260000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/xps-17-9720-front-facing-800x550.png' },
        { id: 13, variant: 'Inspiron', name: 'New Inspiron 12', generation: "13th Generation", price: 360000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7430-2in1-intel/spi/non-fpr/ng/notebook-inspiron-14-7430-silver-800x550.psd?fmt=png-alpha&wid=800&hei=550' },
        { id: 14, variant: 'Inspiron', name: 'Inspiron 15', generation: "13th Generation", price: 460000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/notebook-inspiron-15-3535-plastic-black-800x550.png?wid=800&hei=550' },
        { id: 15, variant: 'Inspiron', name: 'New Inspiron 16', generation: "Latest Generation", price: 490000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/16-5635-amd/spi/silver/fpr/ng/notebook-inspiron-16-5635-silver-800x550.png' },
        { id: 16, variant: 'Inspiron', name: 'Inspiron 14', generation: "12th Generation", price: 26000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/spi/platinum-silver/non-touch/ng/notebook-inspiron-14-5430-silver-800x550.png?fmt=png-alpha&wid=800&hei=550' },
        { id: 17, variant: 'Latitude', name: 'New Latitude 5440', generation: "13th Generation", price: 450000, imageUrl: 'https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/latitude-14-5440-800x550.png' },
        { id: 18, variant: 'Latitude', name: 'New Latitude 3440', generation: "12th Generation", price: 260000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-3440-laptop/spi/non-touch/ng/notebook-latitude-14-3440-uma-hd-gray-800x550.psd?fmt=png-alpha&wid=800&hei=550 ' },
        { id: 19, variant: 'Latitude', name: 'New Latitude 9330', generation: "12th Generation", price: 260000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/products/laptops-and-2-in-1s/latitude/13-9330-touch/spi/2-in-1/ng/notebook-latitude-13-9330-gray-800x550.png?fmt=png-alpha&wid=800&hei=550' },
        { id: 20, variant: 'Latitude', name: 'New Latitude 3540', generation: "12th Generation", price: 160000, imageUrl: 'https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/latitude-15-3540-800x550.png?wid=800&hei=550' },
        { id: 21, variant: 'XPS', name: 'XPS 15', generation: "12th Generation", price: 260000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/spi/ng/notebook-xps-15-9530-silver-800x550.png' },
        { id: 22, variant: 'XPS', name: 'XPS 13', generation: "12th Generation", price: 26000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/xps-13-9315-bl-800x550.png' },
        { id: 23, variant: 'XPS', name: 'XPS 13 Plus', generation: "13th Generation", price: 26000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/xps-13-9320-front-facing-silver-800x550.png' },
        { id: 24, variant: 'XPS', name: 'XPS 17', generation: "13th Generation", price: 260000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/xps-17-9720-front-facing-800x550.png' },
        { id: 25, variant: 'Inspiron', name: 'New Inspiron 12', generation: "13th Generation", price: 360000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7430-2in1-intel/spi/non-fpr/ng/notebook-inspiron-14-7430-silver-800x550.psd?fmt=png-alpha&wid=800&hei=550' },
        { id: 26, variant: 'Inspiron', name: 'Inspiron 15', generation: "13th Generation", price: 460000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/notebook-inspiron-15-3535-plastic-black-800x550.png?wid=800&hei=550' },
        { id: 27, variant: 'Inspiron', name: 'New Inspiron 16', generation: "Latest Generation", price: 490000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/16-5635-amd/spi/silver/fpr/ng/notebook-inspiron-16-5635-silver-800x550.png' },
        { id: 28, variant: 'Inspiron', name: 'Inspiron 14', generation: "12th Generation", price: 26000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/spi/platinum-silver/non-touch/ng/notebook-inspiron-14-5430-silver-800x550.png?fmt=png-alpha&wid=800&hei=550' },
        { id: 29, variant: 'Latitude', name: 'New Latitude 5440', generation: "13th Generation", price: 450000, imageUrl: 'https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/latitude-14-5440-800x550.png' },
        { id: 30, variant: 'Latitude', name: 'New Latitude 3440', generation: "12th Generation", price: 260000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-3440-laptop/spi/non-touch/ng/notebook-latitude-14-3440-uma-hd-gray-800x550.psd?fmt=png-alpha&wid=800&hei=550 ' },
        { id: 31, variant: 'Latitude', name: 'New Latitude 9330', generation: "12th Generation", price: 260000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/products/laptops-and-2-in-1s/latitude/13-9330-touch/spi/2-in-1/ng/notebook-latitude-13-9330-gray-800x550.png?fmt=png-alpha&wid=800&hei=550' },
        { id: 32, variant: 'Latitude', name: 'New Latitude 3540', generation: "12th Generation", price: 160000, imageUrl: 'https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/latitude-15-3540-800x550.png?wid=800&hei=550' },
        { id: 33, variant: 'XPS', name: 'XPS 15', generation: "12th Generation", price: 260000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/spi/ng/notebook-xps-15-9530-silver-800x550.png' },
        { id: 34, variant: 'XPS', name: 'XPS 13', generation: "12th Generation", price: 26000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/xps-13-9315-bl-800x550.png' },
        { id: 35, variant: 'XPS', name: 'XPS 13 Plus', generation: "13th Generation", price: 26000, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/xps-13-9320-front-facing-silver-800x550.png' },
        { id: 36, variant: 'Latitude', name: 'New Latitude 5440', generation: "13th Generation", price: 450000, imageUrl: 'https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/latitude-14-5440-800x550.png' },

]

export default Data;