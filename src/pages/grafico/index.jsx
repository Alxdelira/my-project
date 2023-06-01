import Container from "@/components/Container";
import Dashboard from "@/components/Dashboard";
import FormGroup from "@/components/FormGroup";
import FormItem from "@/components/FormItem";


export default function Grafico() {
    return (
        <>
            <Container>
                <FormGroup>
                    <FormItem>
                        <Dashboard />
                    </FormItem>
                </FormGroup>
            </Container>
        </>
    )
}