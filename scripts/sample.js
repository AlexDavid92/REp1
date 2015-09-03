function appTransfer(args) {
    if (args.text == "Music")
        App.transferPage($("#homepage"), $("#view1"));
    else if (args.text == "Movies")
        App.transferPage($("#homepage"), $("#view2"));
    else if (args.text == "TV Shows")
        App.transferPage($("#homepage"), $("#view3"));
    else if (args.text == "Audiobooks")
        App.transferPage($("#homepage"), $("#view4"));
    else if (args.text == "Downloads")
        App.transferPage($("#homepage"), $("#view5"));
}
