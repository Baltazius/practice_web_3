export default function Form({children, onSubmit, className}) {

    return  <form method="POST" action="" onSubmit={onSubmit} className={"flex flex-col items-center justify-center " + className}>
                {children}
            </form>
}