<script setup lang="ts">
const router = useRouter()
// TODO: Add logic to redirect depending the user auth status
onMounted(() => router.push('/auth/login'))
</script>
