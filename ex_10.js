let hamSandwich = 0
let tunaSandwich = 0
let vegeSandwich = 0
while (breadCount >= 2 && hamCount >= 1) {
hamSandwich += 1
breadCount -= 2
hamCount -= 1
}
while (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2) {
tunaSandwich += 1
breadCount -= 2
tunaCount -= 1
saladCount -= 2
}
while (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2) {
vegeSandwich += 1
breadCount -= 2
saladCount -= 1
tomatoCount -= 2
}
displayThisText('Number of ham sandwich(es)	: ' + hamSandwich)
displayThisText('Number of tuna sandwich(es)	: ' + tunaSandwich)
displayThisText('Number of vegetarian sandwich(es)	: ' + vegeSandwich)
displayIngredients()

// images qui marchent

"https://www.boulangerielangelus.com/wp-content/uploads/2020/09/PAIN-COMPLET-MD-DET-1024x683.png",
"https://www.fernand-dussert.fr/media/catalog/product/cache/5/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/j/a/jambonblanc-02.png",
"https://img.over-blog-kiwi.com/1/04/49/45/20200612/ob_6c6ac9_big-thon.jpg",
"https://www.princedebretagne.com/sites/default/files/styles/540x350/public/2020-06/Salade-Iceberg-page-legume.png?itok=uxO4pdWC",
"https://www.fervalle.com/wp-content/uploads/2022/07/580b57fcd9996e24bc43c23b-1024x982.png",
