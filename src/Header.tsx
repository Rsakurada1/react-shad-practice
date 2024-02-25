const Header = () => {

    const handleClick = () => {
        console.log("クリックされました")
        window.location.reload()
    }

    return(
        <div className="flex
        items-center
        p-4
        bg-pink-100">
            <h2 className="font-bold 
            text-red-500
            mr-auto
            text-red">
            SAKURADA</h2>
            <p className="flex-grow 
            ml-12">
            ここでヘッダー作成の練習をします。</p>
      <button 
      className="bg-red-500 
      hover:bg-red-700
      text-white
      py-2
      px-4f
      mr-40" 
      onClick={handleClick}>最初に戻る</button>
    </div>
    )
}

export default Header