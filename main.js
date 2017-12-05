let iotaticker = $.getJSON("https://api.coinmarketcap.com/v1/ticker/iota/")
let bchticker = $.getJSON("https://api.coinmarketcap.com/v1/ticker/bitcoin-cash/")

if (parseInt(iotaticker.rank) < parseInt(bchticker.rank)) {
  $(".content").text("Yes")
} else {
  $(".content").text("No")
}
