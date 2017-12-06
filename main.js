function update() {
  $.ajax("https://api.coinmarketcap.com/v1/ticker/iota/").done((iotaticker) => {
    iotaticker = iotaticker[0]
    $.ajax("https://api.coinmarketcap.com/v1/ticker/bitcoin-cash/").done((bchticker) => {
      bchticker = bchticker[0]

      if (parseInt(iotaticker.rank) < parseInt(bchticker.rank)) {
        $(".content").html("<div>Yes!</div>")
        $(".content").append(`<div class='subheader'>Iota is currently
        ${(parseFloat(iotaticker.market_cap_usd) / parseFloat(bchticker.market_cap_usd) * 100 - 100).toFixed(2)}% ahead of Bitcoin Cash!</div>`)
        $(".content").append("<img src='./quackening.png'>")
      } else {
        $(".content").html("<div>No.</div>")
        $(".content").append(`<div class="subheader">Iota is currently at $${parseFloat(iotaticker.price_usd).toFixed(3)}.
          Iota will beat Bitcoin Cash at $${(parseFloat(bchticker.market_cap_usd) / iotaticker.total_supply).toFixed(3)},
          a ${(parseFloat(bchticker.market_cap_usd) / parseFloat(iotaticker.market_cap_usd) * 100 - 100).toFixed(2)}% increase from now. </div>`)
        $(".content").append("<img src='./iotamoon.png'>")
      }

    })
  })
}

setInterval(update, 0, 5000)
