import NewChat from "./NewChat"

function SideBar() {
  return (
    <div className="flex flex-col p-2 h-screen">
        <div className="flex-1">
            <div>
                {/* New Chat */}
                <NewChat />
                <div>
                    {/* Model Selction */}
                </div>

                {/* Map through the charTows */}
            </div>
        </div>
    </div>
  )
}


export default SideBar