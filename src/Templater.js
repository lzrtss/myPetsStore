// export default class Templater {
//   constructor(link) {
//     fetch(link)
//       .then(response => response
//         .text())
//       .then(responseText => {
//         this.template = responseText;
//       });
//   }
//   load(objProd, domElem) {
//     let htmlData = this.template;
//     for (let key in objProd) {
//       htmlData = htmlData.replace(`{{${key}}}`, objProd[key]);
//     }
//     domElem.innerHTML += htmlData;
//   }
// }

// ================================================


export default class Templater {
  constructor(link) {
    this.elements = [];
    this.isCatch = false;
    this.isLoad = false;

    fetch(link)
      .then(response => response.text())
      .then(result => {
        this.template = result;
        this.isLoad = true;
        this.isCatch ? this.render() : null;
      });
  }

  load(objProduct, domNode) {
    if (this.isLoad) {
      this.show(objProduct, domNode);
    } else {
      this.isCatch = true;
      this.elements.push({
        objProduct,
        domNode
      });
    }
  }
  render() {
    this.elements.forEach(({ objProduct, domNode }) => {
      this.show(objProduct, domNode);
    });
  }

  show(objProduct, domNode) {
    const node = domNode;
    let htmlData = this.template;
    for (const key in objProduct) {
      const re = new RegExp(`{{${key}}}`, "g");
      htmlData = htmlData.replace(re, objProduct[key]);

      // htmlData = htmlData.replace(re, objProduct[key]);
    }
    node.innerHTML += htmlData;
  }
}


// =================================

// export default class Templater {
//   constructor(link) {
//     this.elements = [];
//     this.isCatch = false;
//     this.isLoad = false;

//     fetch(link)
//       .then(response => response.text())
//       .then(result => {
//         this.template = result;
//         this.isLoad = true;
//         this.isCatch ? this.render() : null;
//       });
//   }

//   load(objProduct, domNode, selector, event, fn) {
//     if (this.isLoad) {
//       this.show(objProduct, domNode, selector, event, fn);
//     } else {
//       this.isCatch = true;
//       this.elements.push({
//         objProduct,
//         domNode,
//         selector,
//         event,
//         fn
//       });
//     }
//   }

//   render() {
//     this.elements.forEach(({ objProduct, domNode, selector, event, fn }) => {
//       this.show(objProduct, domNode, selector, event, fn);
//     });
//   }

//   show(objProduct, domNode, selector, event, fn) {
//     const node = domNode;
//     let stringHTML = this.template;
//     for (const key in objProduct) {
//       stringHTML = stringHTML.replace(`{{${key}}}`, objProduct[key]);
//     }
//     node.innerHTML += stringHTML;
//     this.addHandlers(selector, event, fn);
//   }

//   addHandlers(selectors = [], event, fn) {
//     if (selectors.length) {
//       selectors.forEach(elem => {
//         const node = document.querySelector(elem);
//         node.addEventListener(event, fn);
//       });
//     }
//   }
// }