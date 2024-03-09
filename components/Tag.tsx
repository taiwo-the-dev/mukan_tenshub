function Tag({
  icon, text ,center
}: {
  icon?: boolean,
  text: string,
  center?: boolean
}) {
  return (
    <div className={`rounded-full bg-black flex items-center justify-center tag w-fit px-4 py-3 space-x-2 ${center ? "mx-auto" : ""}`}>
      {icon && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          <path d="M13.6204 4.20059C13.0149 7.48768 10.3034 10.4722 7.80788 10.4722C9.56919 10.6511 12.5998 12.1126 13.6204 16.5275C13.6204 13.1539 17.8736 11.085 20.0001 10.4722C16.1216 10.4722 14.4494 6.29114 13.6204 4.20059Z" fill="#BDFF00" />
          <path d="M4.15763 2.5795C3.85726 4.20998 2.51233 5.6904 1.27446 5.6904C2.14812 5.77911 3.65136 6.50403 4.15763 8.69397C4.15763 7.02055 6.26729 5.99433 7.32212 5.6904C5.39826 5.6904 4.56884 3.61646 4.15763 2.5795Z" fill="#BDFF00" />
          <path d="M4.91745 11.4202C4.53792 13.4804 2.83855 15.351 1.27446 15.351C2.37836 15.4631 4.27776 16.379 4.91745 19.1461C4.91745 17.0317 7.58309 15.735 8.9159 15.351C6.48504 15.351 5.43703 12.7305 4.91745 11.4202Z" fill="#BDFF00" />
        </svg>
      )}
      <span className="font-jetbrains text-white">{text}</span>
    </div>
  )
}

export default Tag;