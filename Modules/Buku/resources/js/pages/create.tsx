import { Head, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import { BukuForm } from '../components/buku-form';
import type { BukuFormData } from '../components/buku-form';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm<BukuFormData>({
        judul: '',
        penulis: '',
        penerbit: '',
        tahun_terbit: '',
        stok: '',
    });

    const submit = (event: FormEvent) => {
        event.preventDefault();
        post('/admin/buku');
    };

    return (
        <>
            <Head title="Tambah Buku" />

            <div className="flex flex-1 flex-col gap-4 p-4">
                <div>
                    <h1 className="text-xl font-semibold">Tambah Buku</h1>
                    <p className="text-sm text-muted-foreground">Isi data buku yang akan ditambahkan.</p>
                </div>

                <BukuForm data={data} errors={errors} processing={processing} submitLabel="Simpan" setData={setData} onSubmit={submit} />
            </div>
        </>
    );
}

// Breadcrumb halaman (layout dipasang otomatis oleh app.tsx)
Create.layout = {
    breadcrumbs: [
        { title: 'Data Buku', href: '/buku' },
        { title: 'Tambah Buku', href: '/admin/buku/create' },
    ],
};