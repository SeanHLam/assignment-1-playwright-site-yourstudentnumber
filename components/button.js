

export default function AppButton({
    link = "",
    text = "Button Text"
}) {
    
  return (
    <a href={link}>
        <button>
            {text}
        </button>
    </a>
  )
}
